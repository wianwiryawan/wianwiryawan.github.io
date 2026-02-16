"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function Experience() {
    const experiences = [
        {
            title: "Mobile Developer",
            company: "Ministry Of Home Affairs Indonesia",
            period: "September 2023 - Present",
            description:
                "Identitas Kependudukan Digital Developer Team.",
            achievements: [
                "Designed and implemented UI components.",
                "Debugged and optimized application performance.",
                "Built cross-platform mobile applications using Flutter and Dart and deploy it on Store.",
                "Implemented data sharing using QR code.",
                "Developed the app with Flutter Ul, Dart-based REST API bridging Flutter and Vertx, Vertx backend for Oracle integration, and PL/SQL procedures-enabling seamless data flow and scalability.",
            ],
        },
        {
            title: "Junior Software Developer",
            company: "Ministry Of Home Affairs Indonesia",
            period: "January 2023 - Present",
            description:
                "Sistem Informasi Administrasi Kependudukan & Identitas Kependudukan Digital Software Developer Team.",
            achievements: [
                "Implemented end-to-end encryption for application security.",
                "Integrated third-party services and APIs to enhance functionality.",
                "Developed and maintained backend services, APIs, and database query.",
                "Implement QR code for data sharing between applications.",
                "Designined a microservices architecture with Vert.x, NodeJS, and Docker containers.",
                "Supported infrastructure scaling by adding servers and creating Docker-based service containers, improving system capacity for increased client requests.",
            ],
        },
        {
            title: "Intern",
            company: "Center for Meteorology and Geophysics Internship",
            period: "Mar 2021 - Jun 2021",
            description:
                "Enhancing website for Bali atmospheric data and geophysical data. Develop user interface dashboard for checking atmospheric data and geophysical data, and admin dashboard for managing atmospheric data and geophysical data.",
            achievements: [
                "Fixing bugs on the application CRUD logic.",
                "Adding application feature for handling bulk data report from csv.",
                "Integrating data from database to the Weather and Geophysical Information application.",
            ],
        }
    ]
    return(
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <Card key={index}>
                                <CardHeader>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                    <div>
                                    <CardTitle>{exp.title}</CardTitle>
                                    <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                                    </div>
                                    <div className="text-sm text-muted-foreground font-medium">{exp.period}</div>
                                </div>
                                </CardHeader>
                                <CardContent>
                                <p className="text-muted-foreground mb-4">{exp.description}</p>
                                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                    {exp.achievements.map((achievement, achIndex) => (
                                    <li key={achIndex}>{achievement}</li>
                                    ))}
                                </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}