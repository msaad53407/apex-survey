//@ts-nocheck
import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/db";
import { update } from "@/lib/action";

export async function PUT(
	req: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	try {
		const { id } = await params;
		const data = await req.json();

		const updatePricing = await prisma.pricing.update({
			where: {
				id: id,
			},
			data: {
				...data,
			},
		});
		update(["/dashboard/pricing"]);
		update(["/"]);
		return NextResponse.json(updatePricing);
	} catch (error) {
		console.log("Pricing Update", error);
		return new NextResponse("Internal server error", { status: 500 });
	}
}
