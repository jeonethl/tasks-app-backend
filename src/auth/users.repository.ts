import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { throws } from "assert";
import { throwError } from "rxjs";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async createUser(authCredentialDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredentialDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await this.create({
            username,
            password: hashedPassword,
        });
        try {
            await this.save(user);
        } catch (error) {
            if (error.code === "23505") {
                console.log('Username is already Exists')
                throw new ConflictException('Username is already Exists')
            } else {
                throw new InternalServerErrorException()
            }
        }
    }
}
