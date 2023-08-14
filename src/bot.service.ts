import { Prisma, Search } from '@prisma/client'

import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Injectable()
export class BotService {
	constructor(private prisma: PrismaService) {}

	async botById(
		userWhereUniqueInput: Prisma.SearchWhereUniqueInput
	): Promise<Search | null> {
		return this.prisma.search.findUnique({
			where: userWhereUniqueInput,
		})
	}

	async bot(): Promise<Search[] | null> {
		return this.prisma.search.findMany()
	}

	async create(data: any): Promise<Search> {
		return this.prisma.search.create({
			data,
		})
	}

	async delete(
		userWhereUniqueInput: Prisma.SearchWhereUniqueInput
	): Promise<Search | null> {
		return this.prisma.search.delete({
			where: userWhereUniqueInput,
		})
	}
}
