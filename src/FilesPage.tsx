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

type IngestPage = {

}

export default function IngestPage({ }: IngestPage) {

  const [dirTree, udpateDirTree]: [any, any] = useState([]);

  return (
    <div className="flex items-center flex-col">

      <div className='flex flex-wrap justify-center'>
        <DownloadCard
          title="YouTube Downloader"
          desc="saves video, transcript, and comments"
          label="Video ID"
          placeholder="OpyIY7ixgI8"
        />
        <DownloadCard
          title="Twitter"
          desc="only saves video"
          label="Twitter Link"
          placeholder="https://x.com/Rubber0Cement/status/1742024413917446225"
        />
      </div>

    </div>
  )
}


export function DownloadCard({
  title,
  desc,
  label,
  placeholder
  // api
}: DownloadCard) {
  return (
    <Card className="w-[350px] m-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">{label}</Label>
              <Input id="name" placeholder={placeholder} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Button variant="outline" onClick={()=>alert("no queue yet")}>Add to Queue</Button> */}
        <Button>Download</Button>
      </CardFooter>
    </Card>
  )
}

type DownloadCard = {
  title: string,
  desc: string,
  label: string,
  placeholder: string
  // api
}