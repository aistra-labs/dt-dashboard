
import { Admin, Resource, ShowGuesser, EditGuesser } from "react-admin";
import { dataProvider } from './dataProvider';
import { PostList, PostEdit, PostCreate} from "./posts";
import { UserList } from "./users";

export const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" edit={PostEdit} list={PostList} create={PostCreate} />
        <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" />
    </Admin>
);