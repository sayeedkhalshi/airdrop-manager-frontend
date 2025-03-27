"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setAccountDetails } from "../redux/features/rightSidebar.slice";

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const accountDetails = useSelector(
        (state: RootState) => state.rightSidebar.rightSidebar.accountDetails
    );

    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );

    const projects = [
        {
            name: "Project A",
            categories: ["Officials", "Employees", "Ecosystem", "Alphas"],
        },
        {
            name: "Project B",
            categories: ["Officials", "Employees", "Ecosystem", "Alphas"],
        },
    ];

    const accounts: Record<
        "Officials" | "Employees" | "Ecosystem" | "Alphas",
        { name: string; link: string }[]
    > = {
        Officials: [
            { name: "Official 1", link: "https://twitter.com/official1" },
            { name: "Official 2", link: "https://twitter.com/official2" },
        ],
        Employees: [
            { name: "Employee 1", link: "https://twitter.com/employee1" },
            { name: "Employee 2", link: "https://twitter.com/employee2" },
        ],
        Ecosystem: [
            { name: "Ecosystem 1", link: "https://twitter.com/ecosystem1" },
            { name: "Ecosystem 2", link: "https://twitter.com/ecosystem2" },
        ],
        Alphas: [
            { name: "Alpha 1", link: "https://twitter.com/alpha1" },
            { name: "Alpha 2", link: "https://twitter.com/alpha2" },
        ],
    };

    const handleProjectClick = (projectName: string) => {
        setSelectedProject(projectName);
        setSelectedCategory(null); // Reset category when a new project is selected
        dispatch(setAccountDetails(null)); // Reset account details when a new project is selected
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        dispatch(setAccountDetails(null)); // Reset account details when a new category is selected
    };

    const handleAccountClick = (account: { name: string; link: string }) => {
        dispatch(setAccountDetails(account));
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="w-full bg-gray-800 text-white p-4 text-center">
                Header
            </header>

            <div className="flex flex-1">
                {/* Left Sidebar */}
                <aside className="w-1/5 bg-gray-100 p-4 grid grid-cols-2 gap-2">
                    {/* Column One: List of Projects */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Projects</h2>
                        {projects.map((project) => (
                            <div
                                key={project.name}
                                className={`cursor-pointer p-2 hover:bg-gray-200 text-gray-700 ${
                                    selectedProject === project.name
                                        ? "bg-gray-300"
                                        : ""
                                }`}
                                onClick={() => handleProjectClick(project.name)}
                            >
                                {project.name}
                            </div>
                        ))}
                    </div>

                    {/* Column Two: Categories */}
                    {selectedProject && (
                        <div>
                            <h2 className="text-lg font-semibold mb-2">
                                {selectedProject} Categories
                            </h2>
                            {projects
                                .find(
                                    (project) =>
                                        project.name === selectedProject
                                )
                                ?.categories.map((category) => (
                                    <div
                                        key={category}
                                        className={`cursor-pointer p-2 hover:bg-gray-200 text-gray-700 ${
                                            selectedCategory === category
                                                ? "bg-gray-300"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleCategoryClick(category)
                                        }
                                    >
                                        {category}
                                    </div>
                                ))}
                        </div>
                    )}
                </aside>

                {/* Main Content (Feed) */}
                <main className="flex-1 bg-white p-4">Feed Content</main>

                {/* Right Sidebar */}
                <aside className="w-1/5 text-gray-700 bg-gray-100 p-4 grid grid-cols-2 gap-2">
                    {/* Column One: Accounts */}
                    {/* Column Two: Account Details */}
                    {accountDetails && (
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold mb-2">
                                Account Details
                            </h2>
                            <p>
                                <strong>Name:</strong> {accountDetails.name}
                            </p>
                            <p>
                                <strong>Link:</strong>{" "}
                                <a
                                    href={accountDetails.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                >
                                    {accountDetails.link}
                                </a>
                            </p>
                        </div>
                    )}

                    {/* Column Two: Accounts
                     */}
                    {selectedCategory && (
                        <div>
                            <h2 className="text-lg font-semibold mb-2">
                                {selectedCategory} Accounts
                            </h2>
                            {accounts[
                                selectedCategory as keyof typeof accounts
                            ]?.map((account) => (
                                <div
                                    key={account.name}
                                    className={`cursor-pointer p-2 hover:bg-gray-200 ${
                                        accountDetails?.name === account.name
                                            ? "bg-gray-300"
                                            : ""
                                    }`}
                                    onClick={() => handleAccountClick(account)}
                                >
                                    {account.name}
                                </div>
                            ))}
                        </div>
                    )}
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
