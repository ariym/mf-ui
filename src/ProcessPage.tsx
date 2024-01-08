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
    <div className="flex items-center flex-col">


      <div className='flex flex-wrap justify-center'>
      </div>

    </div>
  )
}
