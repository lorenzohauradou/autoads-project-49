'use client'

import React from "react"
import Image from "next/image"
import { Star, Shield, Truck, RotateCcw, Heart, Share2, Plus, Minus, Check, Eye, Wind, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">TopMask Pro</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Features
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Safety
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Reviews
                            </span>
                        </nav>
                        <div className="flex items-center space-x-3">
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-cyan-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/8140fcfc-e15c-4505-81db-38823e47305e.jpg?"
                                    alt="TopMask Pro Full-Face Snorkel Mask - Main View"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/937d4233-d043-4d72-bf75-cc5f6ada8fd8.jpg?"
                                        alt="TopMask Pro underwater view"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/5de460bb-97d8-48e9-afb1-876a3aa2a173.jpg?"
                                        alt="TopMask Pro side view"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/e2e28575-001d-4149-bcac-679a373da58b.jpg?"
                                        alt="TopMask Pro features"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/8140fcfc-e15c-4505-81db-38823e47305e.jpg?"
                                        alt="TopMask Pro in use"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <div className="flex gap-2">
                                    <Badge variant="secondary" className="text-xs font-medium bg-cyan-100 text-cyan-800">
                                        🏆 #1 Rated by Google
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs font-medium bg-green-100 text-green-800">
                                        ✓ German Engineering
                                    </Badge>
                                </div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                    TopMask Pro Full-Face Snorkel Mask
                                </h1>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 font-medium">(4,892 reviews)</span>
                                    <Badge className="bg-green-500">TrustPilot Verified</Badge>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                    Breathe naturally underwater with our revolutionary CO2 safety system. Crystal-clear 180° panoramic view, 
                                    prescription lens compatible, and perfect for the whole family.
                                </p>
                            </div>

                            {/* Price */}
                            <div className="space-y-3">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-4xl font-bold text-slate-900">$89.99</span>
                                    <span className="text-xl text-slate-500 line-through">$149.99</span>
                                    <Badge variant="destructive" className="text-sm font-semibold animate-pulse">
                                        40% OFF - Limited Time
                                    </Badge>
                                </div>
                                <p className="text-sm font-medium text-green-600 flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    In stock - Ships within 24 hours with FREE shipping
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:shadow-md transition-all">
                                    <Shield className="h-5 w-5 text-cyan-700" />
                                    <span className="font-medium text-sm">CO2 Safety System</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:shadow-md transition-all">
                                    <Eye className="h-5 w-5 text-cyan-700" />
                                    <span className="font-medium text-sm">180° Panoramic View</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:shadow-md transition-all">
                                    <Wind className="h-5 w-5 text-cyan-700" />
                                    <span className="font-medium text-sm">Anti-Fog Technology</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:shadow-md transition-all">
                                    <Waves className="h-5 w-5 text-cyan-700" />
                                    <span className="font-medium text-sm">Prescription Compatible</span>
                                </div>
                            </div>

                            {/* Options */}
                            <div className="space-y-4">
                                <div>
                                    <span className="font-medium text-slate-700 mb-2 block">Color:</span>
                                    <div className="flex gap-2">
                                        {['Turquoise', 'Blue', 'Black', 'Green'].map((color) => (
                                            <Button key={color} variant="outline" size="sm" className="hover:bg-cyan-50">
                                                {color}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <span className="font-medium text-slate-700 mb-2 block">Size:</span>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm" className="hover:bg-cyan-50">Adult S/M</Button>
                                        <Button variant="outline" size="sm" className="hover:bg-cyan-50">Adult L/XL</Button>
                                        <Button variant="outline" size="sm" className="hover:bg-cyan-50">Kids</Button>
                                    </div>
                                </div>
                            </div>

                            {/* Add to Cart */}
                            <div className="space-y-4">
                                <Button
                                    size="lg"
                                    className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                                >
                                    Experience Safer Snorkeling - Get 20% Off Now
                                </Button>
                                <Button variant="outline" size="lg" className="w-full h-14 text-lg font-semibold rounded-xl border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                                    Transform Your Underwater Experience
                                </Button>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                                <div className="text-center space-y-2">
                                    <Truck className="h-7 w-7 mx-auto text-cyan-600" />
                                    <div>
                                        <p className="text-sm font-semibold">Free Shipping</p>
                                        <p className="text-xs text-slate-500">Worldwide delivery</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <RotateCcw className="h-7 w-7 mx-auto text-cyan-600" />
                                    <div>
                                        <p className="text-sm font-semibold">30-Day Returns</p>
                                        <p className="text-xs text-slate-500">Money-back guarantee</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <Shield className="h-7 w-7 mx-auto text-cyan-600" />
                                    <div>
                                        <p className="text-sm font-semibold">2-Year Warranty</p>
                                        <p className="text-xs text-slate-500">German quality</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety Features Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-cyan-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            Revolutionary CO2 Safety System
                        </h2>
                        <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
                            Our German-engineered smart valve system prevents dangerous CO2 buildup, making snorkeling safer than ever before
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                                <CardContent className="pt-8">
                                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Shield className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Smart CO2 Valves</h3>
                                    <p className="text-slate-600">Advanced valve system automatically expels CO2 while keeping water out</p>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                                <CardContent className="pt-8">
                                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Eye className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">180° Crystal Vision</h3>
                                    <p className="text-slate-600">Panoramic view with anti-fog coating for uninterrupted underwater exploration</p>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                                <CardContent className="pt-8">
                                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Waves className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Universal Comfort</h3>
                                    <p className="text-slate-600">Soft silicone seal fits all face shapes with adjustable straps for perfect fit</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Tabs */}
            <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="features" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 h-12 p-1 bg-white rounded-xl shadow-sm">
                                <TabsTrigger value="features" className="rounded-lg font-medium">
                                    Features
                                </TabsTrigger>
                                <TabsTrigger value="specs" className="rounded-lg font-medium">
                                    Specifications
                                </TabsTrigger>
                                <TabsTrigger value="reviews" className="rounded-lg font-medium">
                                    Reviews
                                </TabsTrigger>
                                <TabsTrigger value="faq" className="rounded-lg font-medium">
                                    FAQ
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="features" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-slate-900">Why Choose TopMask Pro?</h3>
                                        <div className="space-y-5">
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">Breathe Naturally</h4>
                                                    <p className="text-slate-600 leading-relaxed">No more biting on mouthpieces - breathe through your nose and mouth naturally</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">Safe CO2 System</h4>
                                                    <p className="text-slate-600 leading-relaxed">German-engineered valves prevent dangerous CO2 buildup for safer snorkeling</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">Prescription Ready</h4>
                                                    <p className="text-slate-600 leading-relaxed">Optional prescription lenses from -6.0 to +6.0 diopters available</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">Family Friendly</h4>
                                                    <p className="text-slate-600 leading-relaxed">Available in adult and children sizes with multiple color options</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="aspect-video bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/937d4233-d043-4d72-bf75-cc5f6ada8fd8.jpg?"
                                            alt="TopMask Pro features demonstration"
                                            width={480}
                                            height={360}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="specs" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <Card className="shadow-sm border-0">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl">Technical Specifications</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {[
                                                { label: "View Angle", value: "180° Panoramic" },
                                                { label: "Material", value: "Medical-grade Silicone" },
                                                { label: "Lens", value: "Shatterproof Polycarbonate" },
                                                { label: "Sizes", value: "S/M, L/XL, Kids" },
                                                { label: "Colors", value: "Turquoise, Blue, Green, Black, White" },
                                                { label: "Prescription", value: "-6.0 to +6.0 diopters" },
                                                { label: "Safety", value: "CE & FDA Certified" },
                                                { label: "Warranty", value: "2 years" },
                                            ].map((spec, i) => (
                                                <div
                                                    key={i}
                                                    className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0"
                                                >
                                                    <span className="text-slate-600 font-medium">{spec.label}</span>
                                                    <span className="font-semibold text-slate-900">{spec.value}</span>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-900">What's in the Box</h3>
                                        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                                            {[
                                                "1x TopMask Pro Full-Face Snorkel Mask",
                                                "1x Waterproof Phone Case",
                                                "1x Mesh Carry Bag",
                                                "1x Anti-Fog Spray",
                                                "1x User Manual",
                                                "1x Warranty Card",
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <Check className="h-5 w-5 text-green-500" />
                                                    <span className="text-slate-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-8">
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-8 text-center">
                                                <div className="text-4xl font-bold mb-3 text-slate-900">4.9</div>
                                                <div className="flex justify-center mb-3">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-slate-600 font-medium">Based on 4,892 reviews</p>
                                            </CardContent>
                                        </Card>
                                        <div className="md:col-span-2 space-y-4">
                                            {[5, 4, 3, 2, 1].map((stars) => (
                                                <div key={stars} className="flex items-center gap-4">
                                                    <span className="text-sm font-medium w-8">{stars}★</span>
                                                    <div className="flex-1 bg-slate-200 rounded-full h-3">
                                                        <div
                                                            className="bg-yellow-400 h-3 rounded-full transition-all duration-300"
                                                            style={{ width: stars === 5 ? "85%" : stars === 4 ? "12%" : "3%" }}
                                                        />
                                                    </div>
                                                    <span className="text-sm text-slate-600 font-medium w-16 text-right">
                                                        {stars === 5 ? "4,158" : stars === 4 ? "587" : "147"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                name: "Sarah Mitchell",
                                                avatar: "SM",
                                                rating: 5,
                                                date: "3 days ago",
                                                title: "Game changer for snorkeling!",
                                                content:
                                                    "As someone who wears glasses, this mask is incredible. The prescription lenses are perfect and the CO2 system really works - no more foggy masks!",
                                            },
                                            {
                                                name: "James Chen",
                                                avatar: "JC",
                                                rating: 5,
                                                date: "1 week ago",
                                                title: "Safest mask I've ever used",
                                                content:
                                                    "The CO2 safety system gives me peace of mind. My whole family uses these now - even got one for my 8-year-old. Crystal clear vision underwater!",
                                            },
                                            {
                                                name: "Maria Rodriguez",
                                                avatar: "MR",
                                                rating: 5,
                                                date: "2 weeks ago",
                                                title: "Worth every penny",
                                                content:
                                                    "Used this in Hawaii last week. The 180° view is amazing and breathing naturally makes snorkeling so much more enjoyable. German quality shows!",
                                            },
                                        ].map((review, i) => (
                                            <Card key={i} className="shadow-sm border-0 bg-white">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-4">
                                                        <Avatar className="h-12 w-12">
                                                            <AvatarFallback className="bg-cyan-100 text-cyan-700 font-semibold">
                                                                {review.avatar}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1 space-y-2">
                                                            <div className="flex items-center gap-3 flex-wrap">
                                                                <span className="font-semibold text-slate-900">{review.name}</span>
                                                                <div className="flex">
                                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                                        <Star
                                                                            key={star}
                                                                            className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <span className="text-sm text-slate-500">{review.date}</span>
                                                            </div>
                                                            <h4 className="font-semibold text-slate-900">{review.title}</h4>
                                                            <p className="text-slate-600 leading-relaxed">{review.content}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="faq" className="mt-8">
                                <div className="max-w-4xl mx-auto">
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        {[
                                            {
                                                question: "How does the CO2 safety system work?",
                                                answer:
                                                    "Our smart valve system uses separate channels for inhaling and exhaling, automatically expelling CO2 while preventing water entry. This German-engineered design ensures you never rebreathe exhaled air.",
                                            },
                                            {
                                                question: "Can I use this if I wear glasses?",
                                                answer:
                                                    "Yes! We offer prescription lens inserts from -6.0 to +6.0 diopters. They easily snap into the mask and provide crystal clear underwater vision.",
                                            },
                                            {
                                                question: "Is it suitable for children?",
                                                answer:
                                                    "We have specific kids sizes designed for ages 6+. The safety features make it perfect for young snorkelers, giving parents peace of mind.",
                                            },
                                            {
                                                question: "How do I prevent fogging?",
                                                answer:
                                                    "The mask includes anti-fog coating and we provide anti-fog spray. The separate breathing channels also reduce fogging significantly.",
                                            },
                                            {
                                                question: "What's your return policy?",
                                                answer:
                                                    "We offer a 30-day money-back guarantee. If you're not completely satisfied, return it for a full refund - no questions asked.",
                                            },
                                        ].map((faq, i) => (
                                            <AccordionItem
                                                key={i}
                                                value={`item-${i}`}
                                                className="bg-white rounded-xl px-6 shadow-sm border-0"
                                            >
                                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Join Thousands of Happy Snorkelers
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Limited time offer - Get 40% off your TopMask Pro today
                        </p>
                        <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-white text-cyan-600 hover:bg-gray-100">
                            Dive Into Adventure - Order Now!
                        </Button>
                        <p className="mt-4 text-sm opacity-80">
                            Free worldwide shipping • 30-day money-back guarantee
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-slate-50 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">TopMask Pro</span>
                        </div>
                        <p className="text-sm text-slate-600 text-center sm:text-right">© 2024 TopMask Pro. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}