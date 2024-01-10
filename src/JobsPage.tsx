import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchQueue } from './_api'

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

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/_components/ui/table"

import { Progress } from "@/_components/ui/progress"

type QueuePage = {
}

export default function JobsPage({ }: QueuePage) {


  const { isPending, error, data } = useQuery({
    queryKey: ['jobTable'],
    queryFn: fetchQueue
  })

  useEffect(() => {
    console.log("this is the data returned", data)
  }, [data])

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  return (
    <div className="flex items-center flex-col">

      <div className='flex flex-wrap justify-center'>

        <Table>
          {/* <TableCaption>Job Queue</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Status</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>File</TableHead>
              <TableHead>Program</TableHead>
              <TableHead className="text-right">Progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              data.jobs.length > 0 ? data.jobs.map(({status, name, program, fileId}:any) => (
                <TableRow>
                  <TableCell className="font-medium">{status}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{fileId}</TableCell>
                  <TableCell>{program}</TableCell>
                  <TableCell className="text-right"><Progress value={100} /></TableCell>
                </TableRow>
              )) : null
            }
          </TableBody>
        </Table>

      </div>

    </div>
  )
}
