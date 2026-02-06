import React from "react";

export default function ContactForm() {
    return (
        <section id="contact" className="md:p-24 bg-[#65a30d]"> {/* Using a lime-600/700 shade for the main background to match the "Let's Know You Better" vibe, or maybe slightly brighter like #7CFC00? The image is quite bright green. Let's try to match the brand lime color usually #84cc16 but the image looks even simpler. Let's stick to a vibrant lime green. */}
            {/* Actually, looking at the image, it's a solid green background, maybe #65a30d or #4d7c0f? No, it looks like #5d9e18 or similar. Let's use the brand lime #84cc16 as base but maybe a bit darker for text contrast if needed, but the text is white. Let's try #65a30d (lime-600) for better contrast with white text, or stick to the previous #84cc16 if that's the primary brand color. The image looks VERY green. Let's go with a custom class or style if needed, but #65a30d is safe for white text. */}

            <div className="mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Let's Know You Better!
                </h2>
                <p className="text-white/90 text-lg mb-12">
                    Send us a message and we will get back to you shortly.
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-lg">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {/* Name */}
                            <div className="text-left space-y-2">
                                <label className="text-white font-semibold ml-2 block text-sm">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                            </div>

                            {/* Phone */}
                            <div className="text-left space-y-2">
                                <label className="text-white font-semibold ml-2 block text-sm">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="Enter Your Phone Number"
                                    className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                            </div>

                            {/* Email */}
                            <div className="text-left space-y-2">
                                <label className="text-white font-semibold ml-2 block text-sm">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                            </div>

                            {/* Goal */}
                            <div className="text-left space-y-2">
                                <label className="text-white font-semibold ml-2 block text-sm">What is your goal?</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Goal"
                                    className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="button"
                                className="px-12 py-4 bg-[#1a1a1a] text-white font-bold rounded-full hover:bg-black transition-transform hover:scale-105 duration-300 shadow-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
