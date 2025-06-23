"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function Experience() {
    const experiences = [
        {
            title: "Junior Software Developer",
            company: "Ministry Of Home Affairs Indonesia",
            period: "November 2022 - Present",
            description:
                "Sistem Informasi Administrasi Kependudukan & Identitas Kependudukan Digital Software Developer Team.",
            achievements: [
                "Implemented security best practices.",
                "Integrated third-party services and APIs to enhance functionality.",
                "Developed and maintained backend services, APIs, and database query.",
                "Implemented data sharing using QR code.",
            ],
        },
        {
            title: "Mobile Developer",
            company: "Ministry Of Home Affairs Indonesia",
            period: "September 2023 - Present",
            description:
                "Identitas Kependudukan Digital Developer Team.",
            achievements: [
                "Designed and implemented UI components.",
                "Debugged and optimized application performance.",
                "Built cross-platform mobile applications using Flutter and Dart.",
                "Implemented data sharing using QR code.",
            ],
        },
        {
            title: "Intern",
            company: "Center for Meteorology and Geophysics Internship",
            period: "Mar 2021 - Jun 2021",
            description:
                "Enhancing website for Bali atmospheric data and geophysical data. Develop user interface dashboard for checking atmospheric data and geophysical data, and admin dashboard for managing atmospheric data and geophysical data.",
            achievements: [
                "Fixing bugs on CRUD logic",
                "Adding feature for data insertion from .csv file into database",
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