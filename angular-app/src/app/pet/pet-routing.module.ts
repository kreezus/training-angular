import { PetResolverService } from './pet-resolver.service';
import { PetListResolverService } from './pet-list-resolver.service';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetNotFoundGuard } from './pet-not-found.guard';
import { PetCardComponent } from './pet-card/pet-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PetListComponent,
    resolve: {
      pets: PetListResolverService,
    },
    children: [
      {
        path: ':petId',
        component: PetCardComponent,
        canActivate: [PetNotFoundGuard],
        resolve: {
          pet: PetResolverService,
        },
      },
    ],
  },
  {
    path: 'detail/:petId',
    component: PetCardComponent,
    canActivate: [PetNotFoundGuard],
    resolve: {
      pet: PetResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetRoutingModule {}