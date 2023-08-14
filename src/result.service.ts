import { Prisma, Result } from '@prisma/client'

import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Injectable()
export class ResultService {
	constructor(private prisma: PrismaService) {}

	async resultByBotId(
		resultWhereUniqueInput: Prisma.ResultWhereUniqueInput
	): Promise<Result[] | null> {
		return this.prisma.result.findMany({
			where: {
				bot_id: resultWhereUniqueInput.id,
			},
		})
	}

	async update(
		resultWhereUniqueInput: Prisma.ResultWhereUniqueInput
	): Promise<Result | null> {
		return this.prisma.result.update({
			where: {
				bot_id: resultWhereUniqueInput.bot_id,
				id: resultWhereUniqueInput.id,
			},
			data: {
				status_id: resultWhereUniqueInput.status_id as string,
			},
		})
	}
}
