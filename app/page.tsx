'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length
  const charCount = text.length
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length
  const paragraphCount = text.split(/\n+/).filter(Boolean).length

  useEffect(() => {
    const timeout = setTimeout(() => setIsTyping(false), 1000)
    return () => clearTimeout(timeout)
  }, [text])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-4xl shadow-2xl p-6 sm:p-8 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[90%]"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Free Word Counter
        </h1>
        <div className="relative">
          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value)
              setIsTyping(true)
            }}
            placeholder="Type or paste your text here..."
            className="w-full sm:w-11/12 md:w-full h-48 sm:h-64 p-3 sm:p-4 border-2 border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-gray-800 text-base sm:text-lg"
          />
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-4 right-4 text-purple-500"
              >
                Typing...
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
          <CounterBox label="Words" count={wordCount} />
          <CounterBox label="Characters" count={charCount} />
          <CounterBox label="Sentences" count={sentenceCount} />
          <CounterBox label="Paragraphs" count={paragraphCount} />
        </motion.div>
      </motion.div>

      {/* Description Section */}
      <section className="mt-16 max-w-[80%] text-center">
        <h2 className="text-3xl font-semibold text-purple-800 mb-4">About the Word Counter Tool</h2>
        <p className="text-lg text-gray-700 mb-6">
          This free word counter tool helps you quickly count the words, characters, sentences, and paragraphs in your text.
          Whether you're writing an essay, a blog post, or just want to keep track of your content, this tool provides a simple way to measure your text's length and complexity.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mt-12 max-w-[80%]">
        <h2 className="text-3xl font-semibold text-purple-800 text-center mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-purple-600">How do I use the word counter?</h3>
            <p className="text-lg text-gray-700">
              Simply type or paste your text into the input box above. The tool will automatically count the words, characters, sentences, and paragraphs as you type.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-purple-600">Can I use this tool for any type of text?</h3>
            <p className="text-lg text-gray-700">
              Yes, you can use this tool for any text, whether it's for essays, blog posts, or other types of written content. It works with plain text and counts based on spaces, punctuation, and line breaks.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-purple-600">Is this tool free to use?</h3>
            <p className="text-lg text-gray-700">
              Yes, this word counter tool is completely free to use with no hidden fees or sign-up requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

function CounterBox({ label, count }: { label: string; count: number }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-4 text-center shadow-md"
    >
      <h2 className="text-lg sm:text-xl font-semibold text-purple-800">{label}</h2>
      <motion.p
        key={count}
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
      >
        {count}
      </motion.p>
    </motion.div>
  )
}
