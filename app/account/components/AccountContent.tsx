"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { postData } from "@/libs/helpers";

const AccountContent = () => {
  const router = useRouter();
  const subscribeModal = useSubscribeModal();
  const { isLoading, subscription, user } = useUser();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({
        url: '/api/create-portal-link'
      });
      window.location.assign(url);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
    setLoading(false);
  };

  return ( 
    <div className="flex flex-col min-h-screen justify-between">
      <div className="mb-7 px-6">
        {!subscription && (
          <div className="flex flex-col gap-y-4">
            <p>Ningún plan activo.</p>
            <Button 
              onClick={subscribeModal.onOpen}
              className="w-[300px]"
            >
              Suscribirse
            </Button>
          </div>
        )}
        {subscription && (
          <div className="flex flex-col gap-y-4">
            <p>Actualmente estás en el plan
              <b> {subscription?.prices?.products?.name}</b> 
              .
            </p>
            <Button
              disabled={loading || isLoading}
              onClick={redirectToCustomerPortal}
              className="w-[300px]"
            >
              Administrar suscripción
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountContent;
