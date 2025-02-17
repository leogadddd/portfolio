"use client";

import React, { useState } from "react";
import { BsShieldLockFill } from "react-icons/bs";
import { login } from "@/actions/auth/login.action";
import Link from "next/link";
import { ImSpinner2 } from "react-icons/im";
import ErrorMessage from "@/components/general/errormessages.component";

const LoginPage = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="drop-shadow-lg bg-[--color-dark-accent] p-4 rounded-xl min-w-40 flex flex-col items-center">
				<div className="flex items-center w-full mt-2 mb-8 gap-4">
					<BsShieldLockFill size={42} className="w-16" />
					<div className="flex-1 flex flex-col justify-center">
						<h1 className="text-xl font-bold">Dashboard</h1>
						<p className="text-sm text-[--color-dark-accent-3]">Login to the dashboard</p>
					</div>
				</div>
				{true ? (
					<LoginForm />
				) : (
					<>
						<p className="w-full text-red-500 mt-2 text-center mb-2 p-2 py-3 bg-red-900 rounded-xl">
							Login is Disabled
						</p>
						<Link href={"/signup"} className="text-center text-sm mt-4 text-[--color-dark-accent-3] underline">
							Create a new Account
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

const LoginForm = () => {
	const [errorMessage, setErrorMessage] = useState("");
	const [isSuccess, setisSucess] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setErrorMessage("");
		setLoading(true);

		const formData = new FormData(event.currentTarget)
		const response = await login(formData);

		if (response?.error) {
			setErrorMessage(response.error);
			setLoading(false);
			return;
		}

		setisSucess(true);
		setLoading(false);
	};

	return (
		<form className="flex flex-col w-80" onSubmit={handleSubmit}>
			<ErrorMessage error={errorMessage} />
			{
				isSuccess && (
					<p className="w-full text-green-500 mt-2 text-center mb-4 p-2 py-3 bg-green-900 rounded-xl">
						Successfully Logged In
					</p>
				)
			}
			<label htmlFor="email" className="text-sm my-1 text-[--color-dark-accent-3]">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				className="px-4 p-2 bg-[--color-dark-accent-2] border border-[--color-dark-accent-2] rounded-xl placeholder:text-[--color-dark-accent-3]"
				placeholder="example@example.com"
				required
			/>

			<label htmlFor="password" className="text-sm my-1 text-[--color-dark-accent-3]">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				className="px-4 p-2 bg-[--color-dark-accent-2] border border-[--color-dark-accent-2] rounded-xl placeholder:text-[--color-dark-accent-3]"
				placeholder="•••••••••••"
				required
			/>

			<button
				type="submit"
				className=
				"p-2 mb-1 mt-8 bg-[--color-accent] rounded-xl drop-shadow-xl hover:brightness-110 transition-all cursor-pointer flex justify-center items-center disabled:grayscale disabled:cursor-not-allowed"
				disabled={loading}
			>
				{loading ? <Spinner /> : "Login"}
			</button>

			<Link href={"/signup"} className="text-center text-sm mt-4 text-[--color-dark-accent-3] underline">
				Create a new Account
			</Link>
		</form>
	);
};

const Spinner = () => {
	return <ImSpinner2 className="animate-spin" size={24} />;
};

export default LoginPage;
