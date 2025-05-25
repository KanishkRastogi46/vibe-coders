"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";
import apiInstance from "@/utils/axios";

export default function VerifyPage() {
  const [isVerifying, setIsVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const verifyEmail = async () => {
      const email = searchParams.get("email");
      console.log("Verifying email:", email);
      
      if (!email) {
        setError("Invalid verification link");
        setIsVerifying(false);
        return;
      }

      try {
        const response = await apiInstance.post("/verify-email", { email });
        if (response.status === 200) setIsVerified(true)
        else {
            setIsVerified(false);
            toast.error("Email verification failed", {
                description: "Please try again later or contact support.",
                action: {
                    label: "Retry",
                    onClick: () => toast.dismiss(),
                },
            });
            router.push("/");
        }

      } catch (error: any) {
        setError(error.response?.data?.message || "Failed to verify email");
        toast.error("Verification failed", {
          description: error.response?.data?.message || "Please try again later.",
        });
      } finally {
        setIsVerifying(false);
      }
    };

    verifyEmail();
  }, [searchParams]);

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-slate-800/90 border-purple-700/30 backdrop-blur-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-white text-center">
            Email Verification
          </CardTitle>
          <CardDescription className="text-gray-400 text-center">
            {isVerifying 
              ? "Verifying your email address..."
              : isVerified 
                ? "Your email has been verified successfully"
                : "There was an error verifying your email"}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-6">
          {isVerifying ? (
            <div className="flex flex-col items-center space-y-4">
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
              <p className="text-gray-300">Please wait while we verify your email...</p>
            </div>
          ) : isVerified ? (
            <div className="flex flex-col items-center space-y-4">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
              <p className="text-gray-300 text-center">
                Your email has been verified successfully. You can now log in to your account.
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <XCircle className="h-12 w-12 text-red-500" />
              <p className="text-gray-300 text-center">
                {error || "Failed to verify your email. Please try again later."}
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          {!isVerifying && (
            <>
              <Button
                onClick={handleLogin}
                className="w-full bg-primary hover:bg-primary/90"
              >
                {isVerified ? "Go to Login" : "Try Again"}
              </Button>
              {!isVerified && (
                <p className="text-sm text-gray-400 text-center">
                  If you need a new verification link, please contact support.
                </p>
              )}
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}