import { ReactNode, createContext, useCallback, useContext, useState } from "react"

const CowbirdContext = createContext({ cbFetch: window.fetch })

type Message = { id: string, value: ReactNode }

export function CowbirdProvider({
  children,
  messageTimeout = 3000
}: {
  children: React.ReactNode
  messageTimeout?: number
}) {
  const [messages, setMessages] = useState<Message[]>([]);

  const cbFetch: typeof window.fetch = useCallback((...args) => {
    const id = Math.random().toString(36).slice(2);
    setMessages((messages) => [
      ...messages,
      { id, value: "Mock data loaded on page" }
    ]);
    setTimeout(() => {
      setMessages((messages) => messages.filter((message) => message.id !== id));
    }, messageTimeout);
    return window.fetch(...args)
  }, [messageTimeout])

  return (
    <CowbirdContext.Provider value={{ cbFetch }}>
      {messages.length > 0 && (
        <div className="messages">
          {messages.map(({ id, value }) => (
            <div key={id} className="message">
              {value}
            </div>
          ))}
        </div>
      )}
      {children}
    </CowbirdContext.Provider>
  )
}

export function useCowbird() {
  const context = useContext(CowbirdContext)
  if (context === undefined) {
    throw new Error('useCowbird must be used within a CowbirdProvider')
  }
  return context
}
