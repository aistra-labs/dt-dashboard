import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, ReferenceInput, TextInput, Create } from "react-admin";
import { useRecordContext} from "react-admin";

export const PostList = () => (
    <List>
        <Datagrid>
           <ReferenceField source="userId" reference="users" link="show" />
           <TextField source="id" />
           <TextField source="title" />
           <TextField source="body" />
           <EditButton />
        </Datagrid>
    </List>
  );
  const PostTitle = () => {
     const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
    };
    
  export const PostEdit = () => (
    <Edit title={<PostTitle />}>
      <SimpleForm>
        <TextInput source="id" InputProps={{ disabled: true }} />
        <ReferenceInput source="userId" reference="users" link="show" />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Edit>
  );

  export const PostCreate = () => (
    <Create>
        <SimpleForm>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={5} />
    </SimpleForm>
    </Create>
    );