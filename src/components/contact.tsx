"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted:", formData)
        // Reset form
        setFormData({ name: "", email: "", message: "" })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        })
    }
    return(
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                    <h3 className="text-2xl font-semibold mb-6">Reach me out</h3>
                    <p className="text-muted-foreground mb-8">
                        I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>wianwiryawan@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <span>+62   812-4644-0652</span>
                        </div>
                        <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>Jakarta, ID</span>
                        </div>
                    </div>
                    </div>

                    <Card>
                    <CardHeader>
                        <CardTitle>Send me a message</CardTitle>
                        <CardDescription>I'll get back to you as soon as possible.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Input placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div>
                            <Input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        <div>
                            <Textarea
                            placeholder="Your Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                        </Button>
                        </form>
                    </CardContent>
                    </Card>
                </div>
                </div>
            </div>
        </section>
    )
}