"use client"

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["Flutter"],
        },
        {
            title: "Backend",
            skills: ["Java", "Oracle", "PL/SQL", "Node.js"],
        },
        {
            title: "Tools & Technologies",
            skills: ["Git", "SVN", "Docker"],
        },
        {
            title: "Soft Skills",
            skills: ["Problem Solving"],
        }
    ]
    return(
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillCategories.map((category, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                        <Badge key={skillIndex} variant="secondary">
                                            {skill}
                                        </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}