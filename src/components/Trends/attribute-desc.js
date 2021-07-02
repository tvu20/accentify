const ATTRIBUTE_DESC = {
  danceability:
    'Describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.',
  acousticness:
    'A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence that the track is acoustic.',
  energy:
    'A measure from 0.0 to 1.0 representing a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. Features contributing include dynamic range, perceived loudness, and general entropy.',
  speechiness:
    'Detects the presence of spoken words in a track. The more exclusively speech-like, the closer to 1.0. Values above 0.66 describe tracks entirely of spoken words, while between 0.33 and 0.66 are tracks containing both music and speech.',
  tempo:
    'An average of the overall estimated tempos of your top tracks in beats per minute. In music terminology, tempo is the speed or pace of a given piece and derives from the average beat duration.',
  valence:
    'A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (happy, euphoric) while tracks with low valence sound more negative (depressed, angry).',
};

export default ATTRIBUTE_DESC;
