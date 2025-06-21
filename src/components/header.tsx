"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItem = [];
    navItem.push({href: "#about", label: "About"});
    navItem.push({href: "#skills", label: "Skills"});
    navItem.push({href: "#projects", label: "Projects"});
    navItem.push({href: "#experience", label: "Experience"});
    navItem.push({href: "#contact", label: "Contact"});

    return (
        <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link href="https://github.com/wianwiryawan" className="text-2xl font-bold">
                        Kristuaji Wiryawan
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItem.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Button Navigation */}
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>

                {/* Mobile Navitagion */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t">
                        {navItem.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    )
}