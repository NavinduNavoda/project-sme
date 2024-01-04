"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import connect from "@/db/connect";
import serviceModel from "@/models/serviceModel";

const ServiceDetailPage: React.FC = () => {
  const router = useRouter();
  const { serviceId } = router as any;
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        await connect();
        const fetchedService = await serviceModel.findById(serviceId as string);

        // Set the service state
        setService(fetchedService);
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };

    if (serviceId) {
      fetchService();
    }
  }, [serviceId]);

  if (!service) {
    return <p>loading</p>;
  }

  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <p>Price: Rs. {service.price}</p>
      {/* Display other service details */}
      <img
        src={`uploaded/services/${service._id}/${service.thumbnail}`}
        alt="Service Thumbnail"
      />
      {/* Include other details as needed */}
    </div>
  );
};

export default ServiceDetailPage;
