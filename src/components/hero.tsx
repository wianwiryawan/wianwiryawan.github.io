"use client"

import { Button } from "./ui/button";
import Link from "next/link";
import { Linkedin, Mail, Download } from "lucide-react"

export function Hero(){
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                        Hi, I'm <span className="text:primary">Kristuaji Wiryawan</span>
                    </h1>
                    <h2 className="text-xl sm:text-2xl text-muted-foreground mb-8">I'm working for Ministry of Home Affairs Indonesia, developing their Web and Mobile Application.</h2>
                    <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                        I have experience with NodeJs, Microservices, Java, Flutter Dart, Database and have keen interest about building scalable applications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Button size={"lg"} asChild>
                            <Link href={"#contact"}>
                                <Mail className="mr-2 h-4 w-4" />
                                    Get In Touch
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg">
                            <Download className="mr-2 h-4 w-4" />
                                Download Resume
                        </Button>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <Link href={"https://github.com/wianwiryawan"} className="text-muted-foreground hover:text-foreground transition-colors h-6 w-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" aria-hidden="true">
                                <title>GitHub</title>
                                <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.292 3.438 9.773 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.042-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 22.067 24 17.587 24 12.297c0-6.627-5.373-12-12-12"/>
                                <span className="sr-only">GitHub</span>
                            </svg>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/kristuaji-wiryawan-151768199/"} className="text-muted-foreground hover:text-foreground transition-colors h-6 w-6">
                            <Linkedin/>
                                <span className="sr-only">Linkedin</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}