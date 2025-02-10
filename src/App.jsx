import FormComponent from "./components/FormComponent";

function App() {
  return (
    <div className="container mx-auto bg-neutral-800 h-[100vh] flex flex-col items-center justify-center gap-[20px]">
      <h1 className="text-3xl text-green-500">Register Form</h1>
      <FormComponent />
    </div>
  );
}

export default App;
