import Form from '../../components/form/Form';

function Dashboard() {
  const {
    actions: { addTodo },
  } = useDashboard;
  return (
    <>
      <Form addTodo={addTodo} />
    </>
  );
}

export default Dashboard;
