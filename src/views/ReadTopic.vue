<template>
  <main id="dashbaord-home">
    <section>
        <div class="card card-style">
            <div class="card-body">
                <div class="class-header" v-for="article in showArticle" :key="article._id">
                    <h3 class="mb-4">
                        Respiratory diseases
                    </h3>
                    <div class="controls">
                        <div class="edit mr-5" >
                            <p style="font-size: 12px; color: #048464">
                                <i class="fas fa-pen"></i>
                                Edit
                            </p>
                        </div>
                        <div class="delete">
                            <p style="font-size: 12px; color: red">
                                <i class="fas fa-trash"></i>
                                Delete
                            </p>
                        </div>
                    </div>
                </div>
                <div class="topic-story">
                    <p>
                       In humans, the respiratory tract is the part of the anatomy of the respiratory system involved with the process of respiration. The respiratory tract is lined with respiratory mucosa or respiratory epithelium.[1] Air is breathed in through the nose or the mouth. In the nasal cavity, a layer of nasal mucosa acts as a filter and traps pollutants and other harmful substances found in the air. Next, air moves into the pharynx, a passage that contains the intersection between the oesophagus and the larynx. The opening of the larynx has a special flap of cartilage, the epiglottis, that opens to allow air to pass through but closes to prevent food from moving into the airway.

                        From the larynx, air moves into the trachea and down to the intersection known as the carina that branches to form the right and left primary (main) bronchi. Each of these bronchi branches into a secondary (lobar) bronchus that branches into tertiary (segmental) bronchi, that branch into smaller airways called bronchioles that eventually connect with tiny specialized structures called alveoli that function in gas exchange.

                        The lungs which are located in the thoracic cavity, are protected from physical damage by the rib cage. At the base of the lungs is a sheet of skeletal muscle called the diaphragm. The diaphragm separates the lungs from the stomach and intestines. The diaphragm is also the main muscle of respiration involved in breathing, and is controlled by the sympathetic nervous system.

                        The lungs are encased in a serous membrane that folds in on itself to form the pleurae – a two-layered protective barrier. The inner visceral pleura covers the surface of the lungs, and the outer parietal pleura is attached to the inner surface of the thoracic cavity. The pleurae enclose a cavity called the pleural cavity that contains pleural fluid. This fluid is used to decrease the amount of friction that lungs experience during breathing.
                    </p>
                    <img src="../assets/img/topicimg.png" alt="">
                    <p>
                        The respiratory tract is divided into the upper airways and lower airways. The upper airways or upper respiratory tract includes the nose and nasal passages, paranasal sinuses, the pharynx, and the portion of the larynx above the vocal folds (cords). The lower airways or lower respiratory tract includes the portion of the larynx below the vocal folds, trachea, bronchi and bronchioles. The lungs can be included in the lower respiratory tract or as separate entity and include the respiratory bronchioles, alveolar ducts, alveolar sacs, and alveoli.[citation needed]

                        The respiratory tract can also be divided into a conducting zone and a respiratory zone, based on the distinction of transporting gases or exchanging them.

                        The conducting zone includes structures outside of the lungs – the nose, pharynx, larynx, and trachea, and structures inside the lungs – the bronchi, bronchioles, and terminal bronchioles. The conduction zone conducts air breathed in that is filtered, warmed, and moistened, into the lungs. It represents the 1st through the 16th division of the respiratory tract. The conducting zone is most of the respiratory tract that conducts gases into and out of the lungs, but excludes the respiratory zone that exchanges gases. The conducting zone also functions to offer a low resistance pathway for airflow. It provides a major defense role in its filtering abilities.

                        The respiratory zone includes the respiratory bronchioles, alveolar ducts and alveoli, and is the site of oxygen and carbon dioxide exchange with the blood. The respiratory bronchioles and the alveolar ducts are responsible for 10% of the gas exchange. The alveoli are responsible for the other 90%. The respiratory zone represents the 16th through the 23rd division of the respiratory tract.

                        From the bronchi, the dividing tubes become progressively smaller with an estimated 20 to 23 divisions before ending at an alveolus[
                    </p>
                </div>
            </div>
        </div>
    </section>
  </main>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
computed: {
    // to get the article details using getters
    showArticle(){
        let topicname = this.$route.params.topicname
        console.log(topicname)
        return this.$store.getters.getArticleInfo(topicname)
    }
  }
}
</script>

<style scoped>

.card-style{
  border: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
  padding: 30px;
  margin-bottom: 30px;
}
.topic-story p{
    line-height: 30px;
}
.topic-story img{
    margin: 10px;
}
.class-header{
    display: flex;
    justify-content: space-between;
}
.controls{
    display: flex;
}
</style>