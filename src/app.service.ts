import { Prisma, Search, User } from '@prisma/client'

import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Injectable()
export class AppService {
	constructor(private prisma: PrismaService) {}

	async search(
		userWhereUniqueInput: Prisma.SearchWhereUniqueInput
	): Promise<Search | null> {
		return this.prisma.search.findUnique({
			where: userWhereUniqueInput,
		})
	}

	async createSearch(data: any): Promise<Search> {
		return this.prisma.search.create({
			data,
		})
	}
}
