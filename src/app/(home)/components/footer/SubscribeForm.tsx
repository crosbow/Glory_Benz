const SubscribeForm = () => {
  return (
    <div className="relative box-border mx-auto  max-w-[1550px] w-[94%] px-4 md:px-0 lg:px-8 xl:px-0 border border-gray-300 border-l-0 border-r-0 border-t-0 my-14 py-14 md:my-14 md:py-14">
      <div className="mb-14 md:mb-0 order-0 md:flex items-center gap-5">
        <label htmlFor="email" className="block mb-4 sm:text-nowrap">
          Sign Up for Complimentary Shipping and the Latest News
        </label>
        <div className="2xl:mx-30" />
        <div className="flex w-full">
          <input
            className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            type="email"
            id="email"
            name="email"
            required
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck="false"
            autoComplete="email"
            placeholder="Email"
          />
          <button
            type="submit"
            aria-label="Sign up"
            className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};
export default SubscribeForm;
