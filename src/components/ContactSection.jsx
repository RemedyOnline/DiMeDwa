import ShoppingBG from "../assets/img/shoppingBgImage.jpg";

const ContactSection = () => {
  return (
    <section
      className="h-full w-full bg-cover bg-bottom text-center"
      style={{ backgroundImage: `url(${ShoppingBG})` }}
    >
      <div className="mx-auto h-full bg-black bg-opacity-70 px-8 py-16">
        <div className="mx-auto max-w-xl space-y-4 text-white">
          <div className="space-y-4">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Reach Us Anytime
            </h2>
            <p className="text-sm text-slate-400 md:text-base">
              Have questions or need support? We’re here to help with your
              orders, deliveries, and everything in between.
            </p>
          </div>
          <div className="space-y-4">
            <div className="group w-full">
              <h3 className="mb-1 text-base font-semibold md:text-lg">
                Working Hours
              </h3>
              <p className="text-sm text-slate-400 group-hover:cursor-pointer group-hover:underline md:text-base">
                Mon - Fri: 8AM – 6PM
              </p>
              <p className="text-sm text-slate-400 group-hover:cursor-pointer group-hover:underline md:text-base">
                Sat: 9AM – 4PM
              </p>
              <p className="text-sm text-slate-400 group-hover:cursor-pointer group-hover:underline md:text-base">
                Sun: Closed
              </p>
            </div>

            <div className="group w-full">
              <h3 className="mb-1 text-base font-semibold md:text-lg">
                Customer Support
              </h3>
              <p className="text-sm text-slate-400 group-hover:cursor-pointer group-hover:underline md:text-base">
                +233 24 987 6543
              </p>
              <p className="text-sm text-slate-400 group-hover:cursor-pointer group-hover:underline md:text-base">
                support@dimedwa.com
              </p>
            </div>

            <div className="group w-full">
              <h3 className="mb-1 text-base font-semibold md:text-lg">
                Head Office
              </h3>
              <p className="text-sm text-slate-400 group-hover:cursor-pointer group-hover:underline md:text-base">
                Block 45, Spintex Road, Accra - Ghana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
