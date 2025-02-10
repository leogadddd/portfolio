import React from "react";
import Form from "@/components/contactme/form.contactme";

const ContactMeSection = () => {
	return (
		<div className="mt-24">
			<div className="max-w-[576px] mx-auto lg:mx-0 text-6xl font-bold uppercase text-center lg:text-left">
				<h1 className="relative">
					<span className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-10 text-[--color-accent] font-medium">-</span>Let's Create</h1>
				<h2 className="text-[--color-dark-accent-2]">Together.</h2>
			</div>
			<div className="mx-auto lg:mx-0 max-w-[576px] text-center lg:text-left">
				<p className="text-[--color-dark-accent-3] mt-2">
					Feel free to contact me for any inquiries or collaborations.
				</p>
			</div>
			<div className="w-full max-w-[576px] mt-8 mx-auto lg:mx-0 min-h-[400px]">
				<div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-8">
					<Form />
					<div className="flex flex-row justify-between lg:justify-start lg:flex-col w-full lg:w-3/4 gap-6">
						<div className="flex-1 lg:flex-none">
							<h6 className="text-[--color-accent] font-bold">Email</h6>
							<p className="text-[--color-dark-accent-3]">jann@leogadil.com</p>
						</div>
						<div className="flex-1 lg:flex-none">
							<h6 className="text-[--color-accent] font-bold">Based In</h6>
							<p className="text-[--color-dark-accent-3]">Manila, Philippines</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactMeSection