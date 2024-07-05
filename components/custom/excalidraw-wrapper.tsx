"use client"
import {
  Excalidraw,
  MainMenu,
  WelcomeScreen,
  getSceneVersion,
  serializeAsJSON,
} from "@excalidraw/excalidraw"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types"
import { doc, setDoc, getDoc } from "firebase/firestore/lite"
import { db } from "@/lib/firebase/crud"

interface ExcalidrawWrapperProps {
  identifier: string
}

const ExcalidrawWrapper: React.FC<ExcalidrawWrapperProps> = ({
  identifier,
}) => {
  let lastsceneVersion: number = -1
  const onchange = (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  ) => {
    const sceneVersion = getSceneVersion(elements)
    if (sceneVersion > lastsceneVersion) {
      // const content = serializeAsJSON(elements, appState, files, "local")
      // localStorage.setItem("excalidraw" + "_" + identifier, content)
      // lastsceneVersion = sceneVersion

      try {
        const docRef = setDoc(
          doc(db, "boards", "excalidraw" + "_" + identifier),
          { content: serializeAsJSON(elements, appState, files, "database") }
        )
      } catch (error) {
        console.error("got error", error)
      }
    }
  }

  const retrieveInitialDatafromFirestore = async () => {
    try {
      const docRef = doc(db, "boards", "excalidraw" + "_" + identifier)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return JSON.parse(docSnap.data().content)
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!")
      }
    } catch (error) {
      console.error("cannot retrieve data ", error)
    }
    return null
  }
  return (
    <div className="z-50 h-[calc(100vh-10px)]">
      <Excalidraw
        onChange={onchange}
        initialData={retrieveInitialDatafromFirestore()}
      >
        <WelcomeScreen>
          <WelcomeScreen.Hints.ToolbarHint />
          <WelcomeScreen.Hints.MenuHint />
        </WelcomeScreen>
        <MainMenu>
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.SaveToActiveFile />
          <MainMenu.DefaultItems.Export />
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.ToggleTheme />
        </MainMenu>
      </Excalidraw>
    </div>
  )
}
export default ExcalidrawWrapper
