
import ITechnology from '../Models/ITechnology'

export default interface ITechnologyRepository {
    getAll(): Promise<ITechnology[]>;
}