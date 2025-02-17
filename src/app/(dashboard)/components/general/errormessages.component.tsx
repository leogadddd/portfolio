
import React from 'react'

const ErrorMessage = ({ error }: { error: string }) => {
	return (
		<>
			{error && (
				<div className="w-full text-red-500 mt-2 text-center mb-4 p-3 bg-red-900 rounded-xl">
					<ul className="list-disc list-inside text-left">
						{error.split("\n").map((err, index) => (
							<li key={index} className="text-sm">{err.replace(/stack\.\d+/, "Stack")}</li>
						))}
					</ul>
				</div>
			)}
		</>
	)
}

export default ErrorMessage