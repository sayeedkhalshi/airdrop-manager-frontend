import React from "react";

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="w-full bg-gray-800 text-white p-4 text-center">
                Header
            </header>

            <div className="flex flex-1">
                {/* Left Sidebar */}
                <aside className="w-1/5 bg-gray-100 p-4 grid grid-cols-2 gap-2">
                    <div className="p-2">Left Column One</div>
                    <div className="p-2">Left Column Two</div>
                </aside>

                {/* Main Content (Feed) */}
                <main className="flex-1 bg-white p-4">Feed Content</main>

                {/* Right Sidebar */}
                <aside className="w-1/5 bg-gray-100 p-4 grid grid-cols-2 gap-2">
                    <div className="p-2">Right Column One</div>
                    <div className="p-2">Right Column Two</div>
                </aside>
            </div>

            {/* Footer */}
            <footer className="w-full bg-gray-800 text-white p-4 text-center">
                Footer
            </footer>
        </div>
    );
};

export default HomePage;
