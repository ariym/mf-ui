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

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/_components/ui/drawer"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/_components/ui/menubar"

import { Checkbox } from "@/_components/ui/checkbox"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/_components/ui/tabs"

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';



type IngestPage = {}



export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="browse-files">Files</TabsTrigger>
        <TabsTrigger value="add-source">Sources</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}



const UniSidebar = () => (
  <Sidebar className='h-screen'>
    <Menu>
      <SubMenu label="Charts">
        <MenuItem> Pie charts </MenuItem>
        <MenuItem> Line charts </MenuItem>
      </SubMenu>
      <MenuItem> Documentation </MenuItem>
      <MenuItem> Calendar </MenuItem>
    </Menu>
  </Sidebar>
)


export default function IngestPage({ }: IngestPage) {

  const [dirTree, udpateDirTree]: [any, any] = useState([]);

  return (
    <div style={{display: 'flex', height: '100%', minHeight: '400px'}}>
    <UniSidebar />
      <div className="flex items-center flex-col p-10">

        <Ingest />

        <TabsDemo />

      </div>
    </div>
  )
}



export function Ingest() {
  return (
    <Drawer>
      <DrawerTrigger>Ingest</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add Content</DrawerTitle>
          <DrawerDescription>You can add a single file or an auto-sync Source.</DrawerDescription>
        </DrawerHeader>

        <div className='flex flex-wrap justify-center px-5'>
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

        <DrawerFooter>
          {/* <Button>Submit</Button> */}
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>


  )
}



type DownloadCard = {
  title: string,
  desc: string,
  label: string,
  placeholder: string
  // api
}
export function DownloadCard({
  title,
  desc,
  label,
  placeholder
  // api
}: DownloadCard) {
  return (
    <Card className="w-[350px]">
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
