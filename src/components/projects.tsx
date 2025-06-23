"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react"
import Link from "next/link";
import Image from "next/image";

export function Projects() {
    const projects = [
        {
            title: "Sistem Informasi Administrasi Kependudukan",
            description: "A full-stack web application, used by Ministry Of Home Affairs Indonesia for civil registration.",
            image: "seal_of_the_Ministry_of_Internal_Affairs_of_the_Republic_of_Indonesia_(2020_version).svg",
            technologies: ["Node.js", "HTML", "JQuery", "Java", "Docker", "Oracle", "PL/SQL"],
            playStoreUrl: "",
            appStoreUrl: "",
        },
        {
            title: "Identitas Kependudukan Digital",
            description: "A full-stack Indonesia digital identity mobile application on Android and iOS.",
            image: "ikd.png",
            technologies: ["Flutter", "Dart", "Java", "Docker", "Oracle", "PL/SQL"],
            playStoreUrl: "https://play.google.com/store/apps/details?id=gov.dukcapil.mobile_id",
            appStoreUrl: "https://apps.apple.com/id/app/identitas-kependudukan-digital/id6448944056?l=en",
        }
    ]
    return(
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card key={index} className="overflow-hidden">
                                <div className="relative h-90">
                                    <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover"/>
                                </div>
                                <CardHeader>
                                    <CardTitle>
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription>
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant={"outline"}>
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        {index === 1 ? (
                                            <Button variant="outline" size="sm" asChild>
                                                <Link href={project.playStoreUrl} target="_blank">
                                                    <ExternalLink className="mr-2 h-4 w-4" />
                                                    PlayStore
                                                </Link>
                                            </Button>
                                        ) : (<div></div>)}
                                        {index === 1 ? (
                                            <Button size="sm" asChild>
                                                <Link href={project.appStoreUrl} target="_blank">
                                                    <ExternalLink className="mr-2 h-4 w-4" />
                                                    AppStore
                                                </Link>
                                            </Button>
                                        ) : (<div></div>)}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}