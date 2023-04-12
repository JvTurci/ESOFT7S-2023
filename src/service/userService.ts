import User from "../schemas/User";

class UserService {

    async createUser(data) {
        await User.create(data)

        return;
    }

    async findAll(){
        return await User.find();
    }

    async find(id){
        return await User.findById(id);
    }

    async delete(id) {
        return await User.findByIdAndDelete(id);
    }
}

export default new UserService();