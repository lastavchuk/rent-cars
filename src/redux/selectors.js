export const selectFilter = state => state.cars.filter;
export const selectAllCars = state => state.cars.carsData;
export const selectCurrentPage = state => state.cars.currentPage;
export const selectFavoriteCarsId = state => state.cars.carsFavoriteId;
export const selectFavoriteCarsData = state => state.cars.carsFavoriteData;

export const selectIsModalOpen = state => state.modal.isModalOpen;
export const selectModalData = state => state.modal.modalData;

export const selectTheme = state => state.root.theme;
export const selectLang = state => state.root.lang;
