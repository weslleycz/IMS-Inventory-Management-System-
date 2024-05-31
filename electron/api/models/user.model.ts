export class UserModel {
  username: string;
  password: string;
  readonly entity_Name: string = "user";
  createdAt!: Date;
  updatedAt!: Date;
}
