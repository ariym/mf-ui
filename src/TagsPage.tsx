import { useState } from 'react'

// components
import { Input } from "@/_components/ui/input"
import { Label } from "@/_components/ui/label"
import { Button } from "@/_components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card"

import { Checkbox } from "@/_components/ui/checkbox"

type ProcessPage = {
}

export default function ProcessPage({ }: ProcessPage) {

  const [dirTree, udpateDirTree]: [any, any] = useState([]);

  return (
    <div className="flex items-center">




        <p>we are just going to use this to develop a video player real quick by listing out all it's unique ui components and their functions</p>


<div>

        <Button>play/pause</Button>

        <p>session</p>
        <Button>forward</Button>
        <Button>backward</Button>


        <p>Next/Previous</p>

</div>


    </div>
  )
}
