"use client";

export default function HeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-lg aspect-square">
        {/* Placeholder for conversation-led collaboration visual */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center">
          <div className="text-center space-y-4 px-8">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-500 font-medium">
              Conversation-led collaboration visual
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
