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

type AboutPage = {
}

export default function AboutPage({ }: AboutPage) {

  const [dirTree, udpateDirTree]: [any, any] = useState([]);

  return (
    <div className="flex items-center flex-col">


      <div className='flex flex-wrap justify-center'>

        <ul>
          <li>download from github page</li>
          <li>library database host:port,username,password,db_name</li>
          <li>local_content_path</li>
          <li>setting: automatically keep sync with all files in local_content_path directory</li>
        
        </ul>

      </div>

    </div>
  )
}
