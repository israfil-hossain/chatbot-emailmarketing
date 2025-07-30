'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Send, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatbotConfig {
  welcomeMessage: string;
  icon: string;
  background: string;
  textColor: string;
}

export default function ChatbotWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [domainId, setDomainId] = useState<string>('');
  const [config, setConfig] = useState<ChatbotConfig | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Listen for domain ID from parent window
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      
      if (typeof event.data === 'string') {
        setDomainId(event.data);
        loadChatbotConfig(event.data);
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Send initial dimensions to parent
    const sendDimensions = () => {
      const dimensions = {
        width: isMinimized ? '60px' : '350px',
        height: isMinimized ? '60px' : '500px'
      };
      window.parent.postMessage(JSON.stringify(dimensions), '*');
    };

    sendDimensions();

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [isMinimized]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadChatbotConfig = async (domainId: string) => {
    try {
      const response = await fetch(`/api/public/chatbot/${domainId}/config`);
      if (response.ok) {
        const configData = await response.json();
        setConfig(configData);
        
        // Add welcome message
        if (configData.welcomeMessage) {
          setMessages([{
            id: '1',
            content: configData.welcomeMessage,
            role: 'assistant',
            timestamp: new Date()
          }]);
        }
      }
    } catch (error) {
      console.error('Failed to load chatbot config:', error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || !domainId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(`/api/public/chatbot/${domainId}/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          sessionId: 'temp-session' // TODO: Implement proper session management
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.response,
          role: 'assistant',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="w-14 h-14 rounded-full shadow-lg"
          style={{ backgroundColor: config?.background || '#3b82f6' }}
        >
          💬
        </Button>
      </div>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 h-96 z-50 flex flex-col shadow-xl">
      {/* Header */}
      <div 
        className="flex items-center justify-between p-4 rounded-t-lg"
        style={{ 
          backgroundColor: config?.background || '#3b82f6',
          color: config?.textColor || '#ffffff'
        }}
      >
        <div className="flex items-center gap-2">
          {config?.icon && (
            <img src={config.icon} alt="Bot" className="w-6 h-6 rounded-full" />
          )}
          <span className="font-medium">FlowenAI Assistant</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMinimized(true)}
          className="text-white hover:bg-white/20"
        >
          <Minimize2 className="w-4 h-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button
            onClick={sendMessage}
            disabled={isLoading || !inputValue.trim()}
            size="sm"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
