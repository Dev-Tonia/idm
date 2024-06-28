<script setup>
// import { HomeServiceCard } from "#build/components";
</script>

<template>
  <section class="wrapper py-20 bg-[#F2F2F2]">
    <HomeSubSectionTitle title=" What we can help you do " />

    <h3
      class="text-2xl xsm:text-3xl md:text-4xl text-center font-semibold text-gray-950"
    >
      Complete Consulting Services We Provider
    </h3>
    <p class="text-sm sm:text-base text-center w-9/12 mx-auto pt-2">
      We are committed to meticulously planning, executing, and delivering
      exceptional services and results.
    </p>
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 place-content-center justify-center gap-5 pt-8"
    >
      <HomeServiceCard
        title="SAP S/4HANA"
        description="S/4HANA: A cutting-edge Enterprise Resource Planning (ERP) system that streamlines business processes, accelerates decision-making, and enables real-time insights"
      >
        <img src="../../assets/imgs/sap-consulting.png" alt="" />
      </HomeServiceCard>
      <HomeServiceCard
        title="SAP Business One"
        description="SAP Business One: Unparalleled ERP for small and medium-sized enterprises, integrating CRM, sales, inventory, and financials."
      >
        <img src="../../assets/imgs/sap-business-one-logo.png" alt="" />
      </HomeServiceCard>
      <HomeServiceCard
        title="Sap Cloud"
        description="B1Cloud is a Premium Cloud Hosting for SAP Business One, SQL & HANA at the fraction of the cost. It's an ideal cloud-based solution for MSMEs to run and reap all the benefits of SAP Business One without having to invest in infrastructure & complete peace of mind. "
      >
        <img src="../../assets/imgs/sap-cloud.jpg" alt="" />
      </HomeServiceCard>
      <HomeServiceCard
        title="Customer Care Service"
        description="IDM has established an international quality Voice based customer care center in Abeokuta Nigeria that offers employment to over 1000. "
      >
        <img src="../../assets/imgs/ccare.png" alt="" />
      </HomeServiceCard>
      <HomeServiceCard
        title="IDM @ School"
        description="Realizing the importance of starting ICT education early, IDM has a fully developed program to offer IT education to school children from elementary levels. "
      >
        <img src="../../assets/imgs/idm-it.png" alt="" />
      </HomeServiceCard>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
