interface CardProps {
	title: string;
	children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
	return (
		<div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
			<h3 className="mb-3 text-lg font-semibold text-slate-800">{title}</h3>
			<div className="text-slate-600">{children}</div>
		</div>
	);
}
