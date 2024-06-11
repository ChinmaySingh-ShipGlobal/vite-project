import Navbar from "@/PageComponents/Navbar"
import Content from "@/PageComponents/Content"
import Form from "@/PageComponents/Form"


function App() {
  return (
    <>
      <Navbar/>
      <Content/>
      <Form/>
      {/* <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs> */}
{/* <Button variant="destructive">THis is a button</Button> */}
    </>
  )
}

export default App
