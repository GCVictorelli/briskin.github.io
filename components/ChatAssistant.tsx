
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Olá! Sou a assistente virtual da Briskin Dermatologia. Como posso ajudar você hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const botResponse = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans-modern">
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-stone-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] max-w-[90vw] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in border border-stone-100">
          {/* Header */}
          <div className="bg-stone-900 p-4 text-white">
            <h3 className="font-serif-elegant text-lg tracking-wide">Assistente Briskin</h3>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest">IA Inteligente</p>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 p-4 h-[350px] overflow-y-auto space-y-4 bg-stone-50"
          >
            {messages.map((m, i) => (
              <div 
                key={i} 
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-stone-800 text-white rounded-tr-none' 
                      : 'bg-white text-stone-700 shadow-sm rounded-tl-none border border-stone-100'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-stone-100">
                  <Loader2 className="w-4 h-4 animate-spin text-stone-400" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-stone-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Digite sua dúvida..."
              className="flex-1 bg-stone-50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-stone-200"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-stone-800 transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
