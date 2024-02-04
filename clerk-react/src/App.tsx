import { SignedOut, SignedIn } from "@clerk/clerk-react"
 
function App() {
 
  return (
    <div>
      <SignedOut>
        <p>This content is public. Only signed out users can see this.</p>
      </SignedOut>
      <SignedIn>
        <p>This content is private. Only signed in users can see this.</p>
      </SignedIn>
    </div>
  )
}
 
export default App