"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import apiInstance from "@/utils/axios"

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password is required.",
  }),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const router = useRouter();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      console.log(data);
      const response = await apiInstance.post("/login", {
        email: data.email,
        password: data.password,
      });
      if (response.data.success === true) {
        toast.success("Login successful", {
          description: "You can now logged in to your account.",
          action: {
            label: "close",
            onClick: () => toast.dismiss(),
          }
        })
        router.push("/code-gen");
      }
      else toast.error("Login failed", {
            description: response.data.message,
            action: {
              label: "close", 
              onClick: () => toast.dismiss(),
            }
          })
    
    } catch (error) {
      console.error("Registration error:", error)
      toast.error("Registration failed", {
        description: "There was an error processing your registration.",
        action: {
          label: "close",
          onClick: () => toast.dismiss(),
        }
      })
    }
    // Here you would handle the login process
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-slate-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="example@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
                </div>
                <a href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
              
              <Button type="submit" className="w-full mt-6">
                Sign in
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <a href="/register" className="text-primary underline hover:text-primary/90">
              Create account
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}