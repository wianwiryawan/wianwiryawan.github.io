"use client"

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">
                     <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
                     <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="w-64 h-84 mx-auto bg-muted flex items-center justify-center">
                             <Image
                                    src="/picture/profile.jpeg"
                                    width={100}
                                    height={100}
                                    style={{
                                        width: '70%',
                                        height: 'auto',
                                        }}
                                    alt="Picture of the author"
                                />
                        </div>
                        <div className="space-y-6">
                            <p className="text-lg text-muted-foreground">
                                Over 2 years working as a full-stack developer building web and mobile application, also have experience with DevOps and Microservices.
                            </p>
                            {/* <p className="text-lg text-muted-foreground">
                                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through blog posts and mentoring.
                            </p> */}
                            <div className="grid grid-cols-1 gap-4">
                                {/* <Card>
                                    <CardContent className="p-4 text-center">
                                        <div className="text-2xl font-bold text-primary">2+</div>
                                        <div className="text-sm text-muted-foregroundy">Projects Completed</div>
                                    </CardContent>
                                </Card> */}
                                <Card>
                                    <CardContent className="p-4 text-center">
                                        <div className="text-2xl font-bold text-primary">2+</div>
                                        <div className="text-sm text-muted-foregroundy">Years Experience</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>
    );
}